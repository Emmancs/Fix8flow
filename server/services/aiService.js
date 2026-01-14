import axios from 'axios';

export const getAICoaching = async (type, habitData) => {
  const prompts = {
    deep: `You are an expert behavioral psychologist. Analyze: "${habitData.name}" (why: "${habitData.why}"). Streak: ${habitData.streak} days. JSON only: {"assessment":"honest take","psychology":["insight 1","insight 2"],"strategies":[{"name":"technique","how":"apply","science":"why"}],"actions":{"now":"step","week":"goal","system":"change"},"questions":["q1","q2"],"danger":"prevention"}`,

    motivate: `Energizing pep talk for "${habitData.name}". JSON only: {"rally":"opening","vision":"becoming","urgency":"now","identity":"who ARE","challenge":"action"}`,

    troubleshoot: `Troubleshoot "${habitData.name}". JSON only: {"diagnosis":"issue","patterns":["p1","p2"],"causes":[{"issue":"cause","test":"verify","fix":"solution"}],"environment":["fix1","fix2"],"reset":"plan","prevent":"future"}`
  };

  try {
    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2500,
        messages: [
          {
            role: 'user',
            content: prompts[type]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        }
      }
    );

    const text = response.data.content.find((c) => c.type === 'text')?.text || '';
    const clean = text.replace(/```json|```/g, '').trim();
    return JSON.parse(clean);
  } catch (error) {
    console.error('AI Service Error:', error);
    throw new Error('Failed to get AI coaching');
  }
};

