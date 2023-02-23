import AboutPage from "./AboutPage";
import Header from "@/components/Header";
import Works from "./Work";
import Feedback from "./Feedback";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import { products } from "@/data";
import AdminProductsPage from "./Products";

const HomePage = () => {
    return `
        ${Header()}
        ${AboutPage()}
        ${Works()}
        ${Feedback()}
        ${Footer()}
    `;
};

export default HomePage;
