import styled from 'styled-components';
import { Form } from '@rocketseat/unform';


export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ListContainer = styled.div`
padding: 20px 45px;
width: 50%;
box-sizing: border-box;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


table {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;

    thead tr {
        background: #e0e0e0;
    }

    tbody tr {
        height: 30px;
    }

   
}
`;

export const FormContainer = styled.div`
`;

export const StyledForm = styled(Form)``;