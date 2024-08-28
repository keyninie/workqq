// File: pages/api/toggleLight.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { lightId, action } = req.body;

    // Logic to toggle the light based on `lightId` and `action`
    // For now, let's just log the action
    console.log(`Toggling light ${lightId}: ${action}`);

    return res.status(200).json({ message: `Light ${lightId} toggled ${action}` });
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
