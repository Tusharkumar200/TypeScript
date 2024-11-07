import axios from "axios";
import { generate } from "random-words";
import _ from "lodash";

const generateMCQ = (
  meaning:{
  Text: string;
},[], idx: number):string[]=>{

  const correctAns:string = meaning[idx].Text;
  // an array of all meanings except for the correct one
  const allMeaningExceptForCorrect = meaning.filter(
    (i)=>i.Text !== correctAns
  );
  // Randomly generate 3 incorrect options
  const incorrectOptions: string[] = _.sampleSize(allMeaningExceptForCorrect,3).map((i)=>i.Text);

  const mcqOptions = _.shuffle([correctAns, ...incorrectOptions]);
  return mcqOptions;
}

export const translateWords = async (params:LangType): Promise<WordType[]> => {
  try {
      // rapid api endpoint
    const words = generate(8).map((i)=>({Text:i}));


   const response = await axios.post('https://microsoft-translator-text.p.rapidapi.com/translate',words,{

        params: {
            "to[0]": params,
            'api-version': '3.0',
            profanityAction: 'NoAction',
            textType: 'plain'
          },
          headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-key': 'e0d92af953msh41c5694dc80e73bp12c173jsn4089507f9469',
            'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
          },
    })

    const receive: FetchedDataType[] = response.data;
    const arr: WordType[] = receive.map((i, idx) =>{
      const options: string[] = generateMCQ(words, idx);
      return{
        word: i.translations[0].text,
        mening: words[idx].Text,
        options: ["asdf"],
      }
    })
    
    return arr;
  } catch (error) {
    console.log(error);
    throw new Error("Some Error...");
     
  }
};
