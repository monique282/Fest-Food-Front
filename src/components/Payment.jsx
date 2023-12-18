import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/authContext";
import { HiOutlineCheck } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";

export default function Payment() {
    const { products } = useContext(AuthContext);

    if (products.length === 0) {
        <All>
            Carregando
        </All>
    } else {
        return (
            <All>
                <BoxAll>
                    <TotalPaymente>
                        <p><FaWallet style={{ color: "#2E5D15", marginRight: "3%", width: "30px", height: "30px" }} />Pagamento</p>
                        <Order>
                            <p>Resumo da compra</p>
                            <PurchaseSummary>
                                <DescriptionPrice>
                                    <Summary>1x {products[1].name}</Summary>
                                    <PriceDescription>R$ {products[1].price.toFixed(2)}</PriceDescription>
                                </DescriptionPrice>
                                <Divider></Divider>
                                <FinalValue>
                                    <h1>Total do pedido:</h1>
                                    <Amount>R$ 30,50</Amount>
                                </FinalValue>
                            </PurchaseSummary>
                            <CodeName>
                                <Name>
                                    <p>Nome do cliente</p>
                                    <input placeholder='Primeiro nome' type="text"></input>
                                </Name>
                                <Code>
                                    <p>Código</p>
                                    <div>1</div>
                                </Code>
                            </CodeName>
                        </Order>
                    </TotalPaymente>
                    <Sidebar></Sidebar>
                    <FinalizePayment>
                        <Order>
                            <Title>Selecione a forma de pagamento</Title>
                            <CreditDebitMoney>
                                <p><MdPayment style={{ color: "#2E5D15", marginRight: "3%", width: "30px", height: "30px" }} />Credito</p>
                                <div></div>
                            </CreditDebitMoney>
                            <CreditDebitMoney>
                                <p><MdPayment style={{ color: "#2E5D15", marginRight: "3%", width: "30px", height: "30px" }} />Debito</p>
                                <div></div>
                            </CreditDebitMoney>
                            <CreditDebitMoney>
                                <p><FaMoneyBillAlt style={{ color: "#2E5D15", marginRight: "3%", width: "30px", height: "30px" }} />Dinheiro</p>
                                <div></div>
                            </CreditDebitMoney>
                            <ValueChange>
                                <Value>
                                    <p>Valor entregue</p>
                                    <input placeholder='Digite o Valor' type="text"></input>
                                </Value>
                                <Change>
                                    <p>Troco</p>
                                    <div>1</div>
                                </Change>
                            </ValueChange>
                            <Finishing>
                                <RemoveOrderFromList>Cancelar</RemoveOrderFromList>
                                <AddProducttoList>Finalizar Pedido</AddProducttoList>
                            </Finishing>
                        </Order>
                    </FinalizePayment>
                </BoxAll>

            </All>
        )
    }
};

const All = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    overflow-y: auto;
    margin-top: 50px;
    margin-bottom: 50px;
`
const BoxAll = styled.div`
    width: 100%;
    height: auto;
    display: flex;
`
const TotalPaymente = styled.div`
    width: 50%;
    height: auto;
    margin-top: 7%;
    margin-left: 7%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
        p{
        font-family: "Varela Round";
        font-size: 24px;
        color: black;
        font-weight: bold;
        }
`
const Sidebar = styled.div`
    width: 1px;
    color: #ffffff;
    padding: 1px;
    margin-top: 7%;
`
const Order = styled.div`
    width: 90%;
    height: auto;
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 5%;
        img{
        width: 100px;
        height: 80px;
        margin: 2%;
        border-radius: 10px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.15);
        }
        p{
        font-family: "Varela Round";
        font-size: 20px;
        color: black;
        font-weight: bold;
        }
`
const PurchaseSummary = styled.div`
    width: 100%;
    height: auto;
    border: 1px solid #D2D2D2;
    border-radius: 5px;
    margin-top: 1%;
`
const DescriptionPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;
`
const Summary = styled.div`
    margin-left: 10%;
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
`
const PriceDescription = styled.div`
    margin-right: 10%;
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
`
const Divider = styled.div`
    border-bottom: 2px dashed #C3C3C3; 
    margin: 20px 20px; 
`
const FinalValue = styled.div`
    margin-top: 5%;
    margin-left: 10%;
    margin-bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
    }
`
const Amount = styled.div`
    font-family: "Varela Round";
    font-size: 40px;
    color: black;
    font-weight: bold; 
    margin-right: 10%;
`
const CodeName = styled.div`
    height: auto;
    display: flex;
    margin-top: 10%;
    justify-content: space-between;
`
const Name = styled.div` 
    input{
    width: 150%;
    height: 40px;
    font-family: "Varela Round";
    font-size: 15px;
    color: black;
    margin-top: 5%;
    background-color: #F4F4F4;
    border: none;
    border-radius: 5px;
    padding-left: 10px;
        input::placeholder {
        color: #000000; 
        margin-right: 0px;
        }
        input:focus {
        border: 1px solid black;
        outline: none; 
        }
        p{
        font-family: "Varela Round";
        font-size: 20px;
        color: black;
        font-weight: bold; 
        margin-right: 10%;
        margin-bottom: 3%;
        }}
`
const Code = styled.div`
    width: 25%;
    height: 100%;
        p{
        font-family: "Varela Round";
        font-size: 20px;
        color: black;
        font-weight: bold; 
        margin-right: 10%;
        }
        div{
        width: 100%;
        height: 40px;  
        background-color: #F4F4F4;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 9%;
        border-radius: 5px;
        }
`
const FinalizePayment = styled.div`
    width: 50%;
    height: auto;
    margin-top: 7%;
        p{
        font-family: "Varela Round";
        font-size: 24px;
        color: black;
        font-weight: bold;
        }
`
const Title = styled.div`
    font-family: "Varela Round";
    font-size: 20px;
    color: black;
    font-weight: bold;
    margin-top: 4.5%;
`
const CreditDebitMoney = styled.div`
    width: 100%;
    height: 50%;
    border: 1px solid #D2D2D2;
    border-radius: 5px;
    margin-top: 1%;
    display: flex;
    align-items: center;
    justify-content: space-between;
        p{
        margin: 6%;
        display: flex;
        align-items: center;
        }
        div{
        width: 20px;
        height: 20px; 
        border :3px solid #2E5D15 ;
        border-radius: 50px;
        margin-right: 10%;
        }
`
const ValueChange = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    margin-top: 4%;
    justify-content: space-between;
`
const Value = styled.div` 
    width: 100%;
    height: 100%;
        p{
        font-family: "Varela Round";
        font-size: 20px;
        color: black;
        font-weight: bold; 
        margin-right: 10%;
        }
        input{
        width: 50%;
        height: 31px;
        font-family: "Varela Round";
        font-size: 15px;
        color: black;
        margin-top: 6%;
        background-color: #F4F4F4;
        border: none;
        border-radius: 5px;
        padding-left: 10px;
            input::placeholder {
            color: #000000; 
            margin-right: 0px;
            }
            input:focus {
            border: 1px solid black;
            outline: none; 
            }
            }
`
const Change = styled.div`
    width: 100%;
    height: 100%;
        p{
        font-family: "Varela Round";
        font-size: 20px;
        color: black;
        font-weight: bold; 
        margin-right: 10%;
        }
        div{
        width: 50%;
        height: 33px;  
        background-color: #F4F4F4;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 6%;
        border-radius: 5px;
        }
`
const Finishing = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 5%;
    margin-bottom: 10%;
`
const RemoveOrderFromList = styled.div`
    width: 50%;
    height: 50px;
    margin-right: 5%;
    font-family: "Varela Round";
    font-size: 15px;
    color: black; 
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border:2px solid #2E5D15 ;
`
const AddProducttoList = styled.div`
    width: 50%;
    height: 50px;
    background-color: #2E5D15;
    font-family: "Varela Round";
    font-size: 15px;
    color: black; 
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border:2px solid #2E5D15 ;
    color: #FFFFFF;
`
const vad = styled.div`
    
`