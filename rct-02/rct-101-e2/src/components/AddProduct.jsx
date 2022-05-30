import React from "react";
import { useState, useEffect, axios } from "react";
import {
  Button,
  Modal,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
  ModalFooter,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const AddProduct = () => {
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(3);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [New, setNew] = useState({});

  const [List, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let r = await axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`);
      console.log(r.data);
      setList(r.data);
      setTotalCount(Number(r.headers["x-total-count"]));
    };
    getList();
  }, [page,limit]);

  const saveInfo = () => {
    fetch("http://localhost:8080/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        value: New,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        setList([...List, d]);
        setNew({ title: "", category: "", gender: "", price: "" });
      });
  };

  const onChange = (e) => {
    let { name, value } = e.target;

    
      setNew({ ...New, [name]: value });
    
  };




  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen} width="10%" margin="auto">
        Add new Product
      </Button >
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalBody pb={6}>
          <label htmlFor="">Title</label>
          <Input
            data-cy="add-product-title"
            type='text'
            name="title"
            value={New.title}
            onChange={onChange}
          />
          <label htmlFor="">Category</label>
          <Select
            data-cy="add-product-category"
            name="selectedCategory"
            value={New.selectedCategory}
            onChange={onChange}
          >
            <option data-cy="">category</option>
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <label htmlFor="">Gender</label>
          <RadioGroup
            data-cy="add-product-gender"
            onChange={onChange}
          >
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <label htmlFor="">Price</label>
          <Input
            data-cy="add-product-price"
            type="text"
            name="price"
            value={New.price}
            onChange={onChange}
          />
          <Button data-cy="add-product-submit-button" onClick={saveInfo}>
            Submit
          </Button>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AddProduct;
