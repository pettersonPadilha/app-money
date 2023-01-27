import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
            width: 100%;
            border-spacing: 0 0.5rem;

            
        

        th {
            color: var(--text-body);
            font-weight: 500;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;  
        }

        td {
            padding: 1rem 1rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

           
            
            
            
            &:first-child {
                color: var(--text-title);
            }
        }
        .deposit {
            color: #00FF7F	;
            }
        .withdraw {
            color: var(--red);
        }
    }
    @media (max-width: 528px) {
        
        table {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        
        td {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 23.8rem;
        }
  }
`