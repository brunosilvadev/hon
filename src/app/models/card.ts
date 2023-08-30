import { Category } from "./category"

export interface Card
{
    cardId: number,
    cardName: string,
    cardContent: string,
    categoryid: number,
    category?: Category,
}