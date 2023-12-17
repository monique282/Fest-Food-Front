import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/authContext";
import { HiOutlineCheck } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";


export default function Kitchen() {
    const { products } = useContext(AuthContext);

    if (products.length === 0) {
        <All>
            Carregando
        </All>
    } else {
        return (
            <All>
                <Preparing>
                    <p>Preparando:</p>
                    <Order>
                        <img src={products[1].image} alt="" />
                        <NameCode>
                            <h1>201 - Monique</h1>
                            <h2>Descrução do que foi pedido</h2>
                        </NameCode>
                        <Butons>
                            <Not ><HiOutlineX style={{ width: "30px", height: "30px", color: "#CF3C29" }} /></Not>
                            <Ok><HiOutlineCheck style={{ width: "30px", height: "30px", color: "#56A211" }} /></Ok>
                        </Butons>
                    </Order>
                </Preparing>
                <Sidebar></Sidebar>
                <Ready>
                    <p>Pronto:</p>
                    <Order>
                        <img src={products[1].image} alt="" />
                        <NameCode>
                            <h1>201 - Monique</h1>
                            <h2>Descrução do que foi pedido</h2>
                        </NameCode>
                        <Butons>
                            <Not ><HiOutlineX style={{ width: "30px", height: "30px", color: "#CF3C29" }} /></Not>
                            {/* <Ok><HiOutlineCheck style={{ width: "30px", height: "30px", color: "#56A211" }} /></Ok> */}
                        </Butons>
                    </Order>
                </Ready>
            </All>
        )
    }
};

const All = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    display: flex;
    
`
const Preparing = styled.div`
    width: 50%;
    height: 100%;
    margin-top: 7%;
    margin-left: 7%;
        p{
        font-family: "Varela Round";
        font-size: 24px;
        color: black;
        font-weight: bold;
        }
`
const Sidebar = styled.div`
    width: 1px;
    background-color: black;
    color: #ffffff;
    padding: 2px;
    margin-top: 7%;
    border-radius: 10px;
`
const Ready = styled.div`
    width: 50%;
    height: 100%;
    margin-top: 7%;
    margin-left: 4%;
        p{
        font-family: "Varela Round";
        font-size: 24px;
        color: black;
        font-weight: bold;
        }
`
const Order = styled.div`
    width: 90%;
    height: 100%;
    border: none;
    border-radius: 10px;
    display: flex;
    text-align: center;
    box-shadow: 0 1px 4px rgba(0,0,0,0.15);
    margin-top: 5%;
        img{
        width: 100px;
        height: 80px;
        margin: 2%;
        border-radius: 10px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.15);
        }
`
const NameCode = styled.div`
    width: 200%;
    display: flex;
    flex-direction: column;
        h1{
        font-family: "Varela Round";
        font-size: 15px;
        color: black;
        font-weight: bold;
        margin-top: 5%;
        }
        h2{
        font-family: "Varela Round";
        font-size: 15px;
        color: black;
        margin-top: 5%; 
        }
`
const Butons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const Not = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FAE5E5;
    
`
const Ok = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E5F5E6;
`

