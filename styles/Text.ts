import styled from "styled-components";
import { Box } from "./Box";

export const Text = styled(Box)`
    font-family: laker;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 5px;
    font-family: arial;
`

export const H1 = styled.h1`
font-family: laker;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;
    font-size: 4rem;
    text-align: center;
    color: #333;
    width: -webkit-fill-available;
    @media screen and (max-width: ${({ theme }) => `${theme.mobile}`}) {
      font-size: 2.1rem;
    }
`
export const H2 = styled.h1`
    font-family: laker;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;
    font-size: 1.7rem;
    text-align: center;
    ${({ theme }) => `
    color: ${theme.blue};`}
    width: -webkit-fill-available;
    @media screen and (max-width: ${({ theme }) => `${theme.mobile}`}) {
      font-size: 2.1rem;
    }
`
export const P = styled.p`
font-family: sans-serif;
font-size: 0.9rem;
`
