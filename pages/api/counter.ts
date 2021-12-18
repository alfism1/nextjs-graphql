import type { NextApiHandler } from 'next'

const constHandler: NextApiHandler = async (request, response) => {
    const {amount = 1} = request.body;

    await new Promise((resolve) => setTimeout(resolve, 500));

    response.json({data: amount})
}

export default constHandler;