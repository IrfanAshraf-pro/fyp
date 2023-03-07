import LoginRepo from "./LoginRepo";

const repositories={
    login:LoginRepo
};
export const RepositoryFactory={
    get:(name)=>repositories[name]
}