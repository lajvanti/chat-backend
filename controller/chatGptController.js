const openai = require("./chatGptConfig");

const chatApi = async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.json({
      message: "message is required",
    });
  }
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      // prompt: `convert the following natural language description into a sql query Helloooo `,
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 200,
      temperature: 0,
    });

    return res.json({
      message: response.data.choices[0].message.content,
    });
    // return response.data.choices[0].message.content;
  } catch (err) {
    console.log("error", err);
  }
};
module.exports = chatApi;
