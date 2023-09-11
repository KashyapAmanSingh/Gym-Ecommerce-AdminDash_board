import NextCors from 'nextjs-cors';

async function handler(req, res) {
  try {
    // Run the cors middleware
    await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*', // Allow requests from any origin (not recommended for production)
      optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    // Rest of the API logic
    const responseData = { message: 'Hello Next.js Cors!' };
    
    res.status(200).json(responseData);
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default handler;
