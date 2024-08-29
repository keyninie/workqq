"use server";
const { Client } = require('pg');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize PostgreSQL client
const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

// Connect to the database
client.connect().catch((err) => {
    console.error("Database connection error:", err);
});

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function POST(req) {
    try {
        const { temperature, humidity } = await req.json();

        // Validate input
        if (temperature === undefined || humidity === undefined) {
            return new Response(JSON.stringify({ error: 'Temperature and humidity are required' }), {
                status: 400,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
        }

        // Insert or update data in the database
        const query = `
            INSERT INTO dht11_data (temperature, humidity)
            VALUES ($1, $2)
            ON CONFLICT (id) DO UPDATE
            SET temperature = EXCLUDED.temperature,
                humidity = EXCLUDED.humidity
        `;

        await client.query(query, [temperature, humidity]);

        return new Response(JSON.stringify({ message: 'Data saved successfully' }), {
            status: 200,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error saving data:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
}
