import{screen,render,fireEvent} from '@testing-library/react';
import Button from './Component/Button/Button';

test('',()=>{
   const handleButtonClick=jest.fn();
   render(<Button onclick={handleButtonClick}>Add</Button>)    
   const element = screen.getByText('Add');
   fireEvent.click(element)

   expect(handleButtonClick).toHaveBeenCalledTimes(1);
})