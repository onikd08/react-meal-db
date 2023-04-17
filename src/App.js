import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./components/Home";
import About from "./components/About";
import AllMeals from "./components/AllMeals";
import MealDetails from "./components/MealDetails";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/meals",
          element: <AllMeals></AllMeals>,
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/search.php?s="
            );
          },
        },
        {
          path: "/meal/:mealID",
          element: <MealDetails></MealDetails>,
          loader: async ({ params }) => {
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealID}`
            );
          },
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
