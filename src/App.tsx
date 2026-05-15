// import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
import Layout from "./components/Layout.tsx";
// import Counter from "./components/LessonFour/Counter.tsx";
// import CounterAdvanced from "./components/LessonFour/CounterAdvanced.tsx";
// import ClassCounter from "./components/LessonFour/ClassCounter.tsx";
// import NameChanger from "./components/LessonFive/NameChanger.tsx";
import CounterWithCustomHook from "./components/LessonFive/CounterWithCustomHook.tsx";



// type PropsA = {
//     title: string,
//     description: string,
// }
//
// type PropsB = {
//     title: string,
//     description: string,
// }
//
//
//
// type Status = "Error" | "Info" | "Warning";  // UNION
//
// // Tuples
// type Cordinates = [number, number];
//
// // Functions
// type ClickHandler = (event: MouseEvent) => void;
//
// // Intersection
// type Props = PropsA & PropsB;
//
//
//
// // Alternative Intersection // PropsTwo = {title, description, price, sort}
// interface PropsTwo {
//     title: string,
//     description: string,
// }
//
// interface PropsTwo {
//     price: number,
//     sort: number,
// }
//
// // PropsThree = {title, description, price, sort, image}
// interface PropsThree extends PropsTwo {
//     image: string,
// }





function App() {

    return (
    <>
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<FunctionalComponent />*/}
      {/*<ClassComponent />*/}
      {/*<ArrowFunctionalComponent />*/}


        {/*/!*LESSON THREE*!/*/}
        {/*<ArrowFunctionalComponentWithProps title="Heading 1"/>*/}
        {/*<ArrowFunctionalComponentWithProps title="Heading 2" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dignissimos eos incidunt ipsum labore magni odit officiis omnis possimus veniam."/>*/}
        {/*<ArrowFunctionalComponentWithProps title="Heading 3"/>*/}

        {/*LESSON FOUR*/}
        {/*<Layout addClasses="bg-gray=50">*/}
        {/*    /!*<ArrowFunctionalComponentWithProps title="Second Title" description="Description" />*!/*/}
        {/*    /!*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, possimus.</p>*!/*/}
        {/*    <Counter/>*/}

        {/*    /!*<ClassCounter/>*!/*/}

        {/*    <CounterAdvanced/>*/}

        {/*</Layout>*/}

        {/*<div></div>*/}
        {/*<h1></h1>*/}
        {/*<h2 className="cf-text" id="id"></h2>*/}
        {/*h2.cf-text#id*/}


        {/*LESSON FIVE*/}
        <Layout addClasses="bg-gray-50">
            {/*<NameChanger></NameChanger>*/}
            <CounterWithCustomHook/>
        </Layout>


    </>
  )
}

export default App
