import { Form, Formik, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from 'yup';
import * as facilityService from '../../services/FacilityService';
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const FacilityUpdate = () => {
    const [facility, setFacility] = useState();
    const params = useParams();
    const navigate = useNavigate();

    const findFacilityById = async () => {
        const result = await facilityService.findById(params.id);
        if(result){
            setFacility(result.data);
        }else{
            toast(`failed`);
            navigate('/facility/list')
        }
    }

    useEffect(()=>{
        findFacilityById();
    },[])

    const updateFacility = async (facility) => {
        const result = await facilityService.updateFacility(facility);
        console.log(result);
        if (result.status === 200) {
            toast(`Add facility: ${facility.name} success`);
        } else {
            toast(`Add facility: ${facility.name} failed`);
        }
        return result;
    }
    const validateType = (value) => {
        if (!value || value.length === 0) {
            return false;
        }
        return true;
    }

    if(!facility){
        return null;
    }

    return (
        <>
            <Formik
                initialValues={{
                    id: facility?.id,
                    code: facility?.code,
                    name: facility?.name,
                    type: facility?.type,
                    roomStandard: facility?.room_standard,
                    facilityArea: facility?.facility_area,
                    maxPersons: facility?.max_person,
                    poolArea: facility?.pool_area,
                    floorQuantity: facility?.floor_quantity,
                    fee: facility?.fee
                }}


                validationSchema={Yup.object({
                    
                    name: Yup.string()
                        .required('Name not empty')
                        .test('check-length', 'Name not only space', (value) => value.trim().length > 0),

                    type: Yup.array()
                        .test('check-type', "Type not empty", (value) => validateType(value)),

                    roomStandard: Yup.string()
                        .required("Room standard not empty")
                        .test('check-length', 'Room standard not only space', (value) => value.trim().length > 0),

                    facilityArea: Yup.number()
                        .required("Facility area not empty")
                        .min(30, 'Facility area not less than 30 m2')
                        .max(1000, 'Facility area not greater than 30 m2'),

                    maxPersons: Yup.number()
                        .required("Max person not empty")
                        .min(2, 'Max person not less than 2')
                        .max(20, 'Max person not greater than 20'),

                    poolArea: Yup.number()
                        .required("Pool area not empty")
                        .min(30, 'Pool area not less than 30 m2')
                        .max(1000, 'Pool area not greater than 30 m2'),

                    floorQuantity: Yup.number()
                        .required("Floor quantity not empty")
                        .min(1, 'Floor quantity not less than 1')
                        .max(5, 'Floor quantity not greater than 5'),

                    fee: Yup.number()
                        .required("Fee not empty")
                        .min(30, 'Fee not less than $ 30')
                        .max(1000, 'Fee not greater than $ 1000')
                })}


                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    setSubmitting(false);
                    const result = await updateFacility(values);
                    if (result.status === 200) {
                        navigate('/facility/list')
                    }

                }}

            >
                <Form>
                    <div className=" container-fluid d-flex justify-content-center mt-5 mb-5">
                        <h1>Update Facility</h1>
                    </div>
                    <div className="mt-5 mb-5 container-fluid">


                        <div className="row mx-auto">
                            <div className="col-lg-5 col-sm-12 d-flex justify-content-center row">
                                <img className="col-md-6 col-sm-12 border mx-4" style={{ width: "150%", height: "100%" }}
                                    src="https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=" alt="defalut"></img>
                            </div>

                            <div className="container mx-auto my-2 d-flex justify-content-center w-50 bg-light shadow-lg rounded 
                    col-lg-7 col-sm-12">
                                <div className="row g-3 ">

                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Facility code</label>
                                        <div>{facility?.code}</div>
                                        <div style={{ height: '10px' }}>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Facility name</label>
                                        <Field type="text" className="form-control" id="name" name='name' />
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage component={`span`} className="text-danger" name='name' />
                                        </div>
                                    </div>

                                    <div className="col-md-6 ">
                                        <label htmlFor="inputCity" className="form-label" >Type</label><br />
                                        <Field className="form-check-input" name='type' id="year" value='year' type="checkbox" />
                                        <label htmlFor="year" className="mx-2">&nbsp;Year</label>
                                        <Field className="form-check-input" name='type' id="month" value='month' type="checkbox" />
                                        <label htmlFor="month" className="mx-2">&nbsp;Month</label>
                                        <Field className="form-check-input" name='type' id="day" value='day' type="checkbox" />
                                        <label htmlFor="day" className="mx-2">&nbsp;Day</label>
                                        <Field className="form-check-input" name='type' id="hour" value='hour' type="checkbox" />
                                        <label htmlFor="year" className="mx-2">&nbsp;Hour</label>
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage component={`span`} className="text-danger" name='type' />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="roomStandard" className="form-label">Room standard</label>
                                        <Field type="text" name='roomStandard' className="form-control" id="roomStandard" placeholder="room standard" />
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage component={`span`} className="text-danger" name='roomStandard' />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="area" className="form-label">Facility area</label>
                                        <Field type="number" className="form-control" name='facilityArea' id="area" placeholder="area" />
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage component={`span`} className="text-danger" name='facilityArea' />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="maxPersons" className="form-label">Max persons</label>
                                        <Field type="number" className="form-control" name='maxPersons' id="maxPersons" placeholder="max persons" />
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage component={`span`} className="text-danger" name='maxPersons' />
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <label htmlFor="poolArea" className="form-label">Pool area</label>
                                        <Field type="number" className="form-control" name='poolArea' id="poolArea" placeholder="pool area" />
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage component={`span`} className="text-danger" name='poolArea' />
                                        </div>
                                    </div>


                                    <div className="col-md-4">
                                        <label htmlFor="floorQuantity" className="form-label">Floor quantity</label>
                                        <Field type="number" className="form-control" name='floorQuantity' id="floorQuantity" placeholder="floor quantity" />
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage component={`span`} className="text-danger" name='floorQuantity' />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <label htmlFor="fee" className="form-label">Fee</label>
                                        <Field type="number" className="form-control" id="fee" name='fee' placeholder="fee" />
                                        <div style={{ height: '10px' }}>
                                            <ErrorMessage component={`span`} className="text-danger" name='fee' />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-dark w-100 ">Save</button>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik >
        </>
    )
}

export default FacilityUpdate;