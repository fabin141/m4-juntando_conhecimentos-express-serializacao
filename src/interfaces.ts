// suas tipagens vai aqui
type ClientRequiredKeys = "name" | "cpf" | "birthYear";

interface Client {
    name: string;
    cpf: string;
    birthYear: number;
}

export { Client, ClientRequiredKeys}