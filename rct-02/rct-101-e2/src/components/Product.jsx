import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Text,
  Image,
  Box,
  Stack,
  Heading,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

const Product = () => {
  const [List, setList] = useState([]);
  // console.log('List:', List)

  useEffect(() => {
    const getList = async () => {
      let r = await axios.get("http://localhost:8080/products?_page1&_limit=3");
      console.log(r.data);
      setList(r.data);
    };
    getList();
  }, []);

  return ( 
  <div>
      {List.map((data) =>(
        <div>
  <Stack data-cy="product" display="flex" flexDirection="column">  
        <Image data-cy="product-image" src={data.imageSrc} width="100px" height="100px"/>
        <Text data-cy="product-category">{data.category}</Text>
        <Tag>
          <TagLabel data-cy="product-gender">{data.gender}</TagLabel>
        </Tag>
        <Heading data-cy="product-title">{data.title}</Heading>
        <Box data-cy="product-price">{data.price}</Box>
      
      </Stack>
      </div>
      ))}
    </div>
  )
}
export default Product
