
import { FaHome } from "react-icons/fa";
import CreateInventory from "./inventory.create/create.inventory";

const InventoryComponent = () => {
  return (
    <main className="w-full">
        <section className="flex justify-between w-full">
            <div className="flex gap-2 items-center">
                <FaHome size={'1.1rem'}/>
                <span>Inventory</span>
            </div>

            <div>
                <CreateInventory/>
            </div>
        </section>

        <section>

        </section>
    </main>
  )
}

export default InventoryComponent