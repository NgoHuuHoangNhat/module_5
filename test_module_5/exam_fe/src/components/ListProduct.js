import React, { useEffect, useState } from "react";
import * as productService from '../services/ProductService';
import { Link } from "react-router-dom";
import * as productTypeService from '../services/ProductTypeService';
import Modal from "../modal/Modal";
import { toast } from "react-toastify";

const ListProduct = () => {
    const [products, setProducts] = useState();
    const [search, setSearch] = useState("");
    const [productTypeId, setProductTypeId] = useState();
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState();
    const [productTypes, setProductTypes] = useState();
    const [dataModal, setDataModal] = useState({
        show: false,
        data: null
    })
    const getProductTypes = async () => {
        const result = await productTypeService.getProductTypes();
        setProductTypes(result.data);
    }
    const showModal = (product) => {
        setDataModal({
            show: true,
            data: product
        })
    }
    const closeModal = () => {
        setDataModal({
            show: false,
            data: null
        })
    }
    const deleteProduct = async () => {
        const result = await productService.deleteProduct(dataModal.data.id);
        setDataModal({
            show: false,
            data: null
        })
        toast(`Xoá thành công`);
        getProducts()
    }
    const getProducts = async () => {
        const result = await productService.getProducts(page, search, productTypeId);
        console.log(result);

        setTotalPage(result.data.totalPages);
        setProducts(result.data.content);
    }
    const handleSearch = async () => {
        let searchName = document.getElementById("search").value;
        let typeId = document.getElementById('productType').value;
        setSearch(searchName);
        setProductTypeId(typeId);
        setPage(0)
    }
    const previousPage = () => {
        if (page > 0) {
            setPage((pre) => pre - 1);
        }
    }
    const nextPage = () => {
        if (page < totalPage - 1) {
            setPage((pre) => pre + 1);
        }
    }
    useEffect(() => {

        getProducts();
        getProductTypes();
    }, [search, productTypeId, page])
    if (!products || !productTypes) {
        return null;
    }
    return (
        <>
            <h1 className="text-center">Danh Sách Sản Phẩm</h1>
            <div className="container">
                <Link to={`create`} className="btn btn-outline-success">Thêm mới</Link>
                <div class="d-flex justify-content-end mx-auto container mt-5">
                    <div class="input-group mb-3 w-50 ">
                        <select as='select' name='type' id="productType" className="form-control">
                            <option value="">Tất cả</option>
                            {productTypes.map((productType, index) => {
                                return (
                                    <option key={`PT_${index}`} value={productType.id}>{productType.name}</option>
                                )

                            })}
                        </select>
                        <input type="text" class="form-control" id='search' placeholder="Nhập tên sản phẩm" aria-label="Recipient's username"
                            aria-describedby="button-addon2" />
                        <button class="btn btn-outline-primary" onClick={() => handleSearch()} type="button" id="button-addon2">
                            Tìm kiếm</button>
                    </div>
                </div>


                {(products.length !== 0) ? <div> <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Ngày nhập</th>
                            <th>Số lượng</th>
                            <th>Loại sản phẩm</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => {
                            return (
                                <tr key={`P_${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{product.code}</td>
                                    <td>{product.name}</td>
                                    <td>{product.date.split("-").reverse().join("-")}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.clothesType.name}</td>
                                    <td>
                                        <Link to={`/update/${product.id}`} className="btn btn-outline-primary" >
                                            sửa
                                        </Link>
                                        <button className="btn btn-outline-danger ms-2"
                                            onClick={() => showModal(product)}
                                        >Xoá</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                    <div className="d-flex justify-content-center">
                        <nav aria-label="Page navigation example ">
                            <ul class="pagination">
                                <li class="page-item">
                                    <button class="page-link" onClick={() => previousPage()} aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </button>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">{page + 1}...{totalPage}</a></li>
                                <li class="page-item">
                                    <button class="page-link" onClick={() => nextPage()} aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div></div> : <h3 className="text-danger text-center">Không có sản phẩm nào</h3>}

            </div>
            {dataModal.show && <Modal title={`Xoá sản phẩm`}
                msg={`Bạn có muốn xoá sản phẩm ${dataModal.data.name}`}
                onCLose={() => closeModal()}
                onDelete={() => deleteProduct()}
            />}
        </>
    )
}
export default ListProduct;