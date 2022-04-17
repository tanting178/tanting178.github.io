import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 4px 8px;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Inter', Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;

  &:first-child {
    margin-right: 12px;
  }

  &:active {
    // background: #41addd;
    // color: #fff;
  }
`;
