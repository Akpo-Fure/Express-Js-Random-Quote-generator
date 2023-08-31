import { Request, Response, NextFunction } from "express";
import { quotes } from '../config/array';


function getRandomObjectFromArray(array: any) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


export const randomQuote = (req: Request, res: Response, next: NextFunction) => {

    const randomObject = getRandomObjectFromArray(quotes);
    const quote = randomObject.quote.split("-")[0]
    const authors = randomObject.quote.split("-")[1]
    console.log(quote);
    res.render('index', { quote: quote, authors: authors });
}