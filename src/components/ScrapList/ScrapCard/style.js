import styled from "styled-components";

export const StyledScrapCard = styled.li`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
   gap: 1rem;

   padding: 1.5rem 0;

   border-bottom: 1px solid var(--color-black);

   .contentBox {
      min-width: clamp(0px, 100%, 350px);

      p:last-child {
         margin-top: 2rem;
      }
   }
`;
