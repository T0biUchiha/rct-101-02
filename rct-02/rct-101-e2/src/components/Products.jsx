import React ,{useEffect}from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import { Flex,Grid } from "@chakra-ui/react";

const Products = () => {


 
  return (
    <Flex flexDirection="column">
      <AddProduct  />
      <Grid display="grid" gridTemplateColumns="20% 1fr"><Product/></Grid>
      <Pagination />
    </Flex>
  );
};

export default Products;
