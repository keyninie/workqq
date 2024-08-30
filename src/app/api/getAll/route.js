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
        const result = await client.query('SELECT ultrasonic, red, green, temperature, humidity FROM "CHANS004"');
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


