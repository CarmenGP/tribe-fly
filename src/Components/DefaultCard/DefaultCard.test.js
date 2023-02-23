import { render } from '@testing-library/react';
import DefaultCard from './DefaultCard';


test("renders content", () => {
    const type = "category"
    const info = {
        title: "Barcelona",
        img: "https://i.gyazo.com/123ef1129e9399f09e45466a6123e9d4.jpg"
    }
    
    const component = render(<DefaultCard type={type} info={info} img={info.img} />)

    component.getByText(info.title)
    component.container.querySelector("img")
})

test('clicking the button calls event handler', () => {

})