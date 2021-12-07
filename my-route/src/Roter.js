import { BrowserRouter,Route,Routes} from "react-router-dom";
import Italy from "./Italy";
import Canada from "./Canada";
import UK from "./UK";


export default function Router(){
    return(
        <BrowserRouter>
        <Routes>

            <Route path="country">
                <Route path="Italy" element={<Italy/>} />
                <Route path="Canada" element={<Canada/>} />
                <Route path="UK" element={<UK/>} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}