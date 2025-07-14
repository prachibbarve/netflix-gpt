import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: OPENAI_KEY, // This is the default and can be omitted default process.env['OPENAI_API_KEY']
  dangerouslyAllowBrowser: true,
});

export default openai;
