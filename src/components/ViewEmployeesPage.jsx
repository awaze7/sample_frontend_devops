import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const backendUrl = process.env.VITE_BACKEND_URL;

export default function ViewEmployeesPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                console.log('Backend URL:', backendUrl);
                const response = await axios.get(`${backendUrl}/records`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                toast.error("Error fetching data");
            } finally {
                setTimeout(() => setLoading(false), 1500);
            }
        };
        
        fetchData();
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id', 
            },
            {
                Header: 'First Name',
                accessor: 'first_name',
            },
            {
                Header: 'Last Name',
                accessor: 'last_name',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Position',
                accessor: 'position',
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
            {loading ? (
                <div className="flex flex-col items-center">
                    <div className="text-lg font-semibold text-gray-700 mb-4">Loading...</div>
                </div>
            ) : (
                <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-x-auto">
                    <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center pt-2">Employees Table</h1>
                    <table {...getTableProps()} className="w-full border-collapse">
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200 border-b">
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()} className="p-3 text-left text-gray-600 font-semibold">
                                            {column.render('Header')}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map(row => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()} className="hover:bg-gray-100">
                                        {row.cells.map(cell => (
                                            <td {...cell.getCellProps()} className="p-3 border-b text-gray-700">
                                                {cell.render('Cell')}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}
