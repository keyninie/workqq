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

export async function POST(request) {
    try {
        const requestBody = await request.json(); // Parse the request body as JSON
        const { ultrasonic, status, temperature,humidity } = requestBody;

        // Ensure correct number of parameters
        const result = await client.query(
            'UPDATE "CHANS004" SET ultrasonic = $1, status = $2, temperature = $3, humidity = $4 WHERE id = 1',
            [ultrasonic, status, temperature, humidity] // Correct number of parameters
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
