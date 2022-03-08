import http from "@/http-common";
import { IItemPokemon } from "../interfaces/item-pokemon.interface";
import { IPokemon } from "../interfaces/pokemon.interface";

class PokemonService {
    async getAll(offset: number, limit: number): Promise<Array<IItemPokemon>> {
        let path = "/pokemon?offset=" + offset + "&limit=" + limit;
        return await http.get(path).then(resposne => {
            return resposne.data;
        });
    }

    async get(name: string): Promise<IPokemon> {
        return http.get(`/pokemon/${name}`).then(resposne => {
            return resposne.data;
        });
    }
}
export default new PokemonService();
;