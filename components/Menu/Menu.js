import { motion } from 'framer-motion'

export default function Menu(props) {

    const menus = props.menu.data.menuItemsCollection.items

    return (
        <>
            <div className="text-center text-8xl pb-10 text-white">Menu</div>
            <div className="overflow-x-auto rounded-xl">
                <table className="table-fixed w-full text-white p-10">

                    <thead className="py-10 bg-slate-500">
                        <tr className="px-20 h-24 rounded-lg border-b-2 border-gray-600">
                            <th>Item</th>
                            {/* <th>Description</th> */}
                            <th>Price</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {menus.map((menu, index) => (
                            <tr className="h-24 bg-slate-700 border-b-2 border-gray-600">
                                <td>{menu.itemName}</td>
                               {/*  <td>{menu.description}</td> */}
                                <td>{menu.price}</td>
                                <td>
                                    <motion.button
                                        className="btn glass text-white"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <a href={menu.link} target='_blank'>Order</a>
                                    </motion.button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}