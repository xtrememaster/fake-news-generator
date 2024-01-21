import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({ name: "" });
const AppProvider = ({ children }) => {
  const [name, setName] = useState("");
  return (
    <AppContext.Provider value={{ name, setName }}>
      {children}
    </AppContext.Provider>
  )
}

const AppWrapper = () => {
  return (
    <AppProvider>
      <AppController />
    </AppProvider>
  )
}

const AppController = () => {
  const appContext = useContext(AppContext);
  return (
    <div>
      <img id="headerImg" src="./images/headerPic.jpg" alt="Header Image" width="700" height="100" />
      <h1>{appContext.name} Buys Golden Shell</h1>
      <p>BEVERLEY HILLS, CA - 18 year-old lottery winner {appContext.name} has been found strolling down Beverly Hills holding onto nothing other than their recently purchased golden taco.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra vitae est ac scelerisque. Fusce mollis, massa sed placerat condimentum, eros orci porttitor nulla, in sagittis magna magna sed purus. Nam id pretium nulla. Vivamus placerat diam vitae egestas imperdiet. Integer sed tristique erat. Fusce vulputate quam at turpis congue laoreet. Ut mattis enim quis mauris efficitur, nec dapibus odio varius. Maecenas mattis turpis id diam blandit, sit amet tempus lorem porta. Nunc nisl neque, rutrum nec lacus non, commodo vestibulum orci. Vestibulum sit amet purus bibendum, maximus orci at, elementum diam. Nam ac mattis sapien. Maecenas blandit odio vel posuere tempus. Curabitur volutpat risus sed orci aliquet tincidunt. Aliquam erat volutpat. Nullam malesuada purus ac dui dapibus, vel consectetur ligula faucibus. Pellentesque dolor sem, sodales at magna eget, efficitur efficitur diam.</p>
      <p>Ut faucibus a eros sed lacinia. Vestibulum elementum neque quis libero tincidunt rhoncus. Suspendisse potenti. Aenean bibendum tortor eu cursus ultricies. Quisque et facilisis massa. Praesent semper dolor eget mi faucibus convallis. Vestibulum bibendum, nibh non volutpat cursus, lorem neque tristique lectus, accumsan euismod lacus arcu nec turpis. Quisque sit amet porttitor felis, at fringilla mauris. Donec libero arcu, finibus aliquet rhoncus eu, pulvinar id nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus ac pharetra magna. Fusce in orci ut diam iaculis eleifend ac quis arcu. Curabitur varius purus purus, id congue libero consectetur in.</p>
      <p>Sed at sem eget sem dictum lobortis. Nam iaculis eleifend varius. Praesent vestibulum, nisl ac varius vehicula, mi enim placerat diam, at viverra mi arcu id est. Etiam commodo eget ipsum vel posuere. Pellentesque condimentum placerat dui elementum sagittis. In tincidunt a ligula vitae tincidunt. Cras in auctor nisi, sed pulvinar arcu. Nunc viverra odio eget ultrices malesuada.</p>
    </div>
  )
}

export default AppWrapper;