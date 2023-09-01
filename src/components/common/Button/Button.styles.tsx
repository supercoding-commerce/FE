import styled from '@emotion/styled';

export const Button = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: .5rem;
    border: 1px solid black;
    cursor: pointer;

    &.variant {
        &_contained {
            background-color: var(--background-color);
        }    

        &_outlined {
            background-color: transparent;
            border-color: var(--color);
            color: var(--color);
        }

        &_main {
            background-color: black;
            color: var(--color);
        }
    }

    &.size{
        &_large {
            width: var(--width);
            height: 64px;
            font-size: 18px;
        }
        &_medium {
            height: 40px;
            border-radius: 8px;
            font-size: 16px;
            padding: 12px 0px ;
            width: var(--width);
        }
        &_small {
            height: 26px;
            border-radius: 20px;
            font-size: 12px;
            padding: 7px 0px ;
            width: var(--width);
        }
        &_xsmall {
            height: 20px;
            border-radius: 3px;
            font-size: 10px;
            padding: 7px 4px ;
        }
    }

    &.circle {  
        border-radius: 100%;
        width: var(--width);
        height: var(--height);
        padding: 0px 0px ;
    }

    &.full-width {  
        width: 100%;
    }
`