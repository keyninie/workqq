// app/api/route.js
"use server";
const { Client } = require('pg');
const dotenv = require('dotenv');

// load environment variables
dotenv.config();

// initialize PostgreSQL client
const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

// connect to the database
client.connect().catch((err) => {
    console.error("Database connection error:", err);
});

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function GET() {
    try {
        const result = await client.query('SELECT ultrasonic, red, green, temperature, humidity, raindrop_value FROM "CHANS004"');
        return new Response(JSON.stringify(result.rows), {
            status: 200,
            headers: {
                ...corsHeaders,
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
            },
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    }
}

export async function POST(request) {
    try {
        const requestBody = await request.json(); // Parse the request body as JSON
        const { temperature, humidity, raindrop_value } = requestBody;

        const result = await client.query(
            'UPDATE CHANS004 SET temperature = $1, humidity = $2, raindrop_value = $3 WHERE id = 1',
            [temperature, humidity, raindrop_value]
        );

        return new Response(JSON.stringify(result.rows), {
            status: 200,
            headers: {
                ...corsHeaders,
                "Content-Type": "application/json",
                "Cache-Control": "no-cache"
            },
        });
    } catch (error) {
        console.error("Error updating data:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    }
}
