import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

const BrandUpdate = () => {
    return (
        <div className="content container-fluid snipcss-BVBoO">
            <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
                <h2 className="h1 mb-0 align-items-center d-flex gap-2">
                    <img width="20" src="https://6valley.6amtech.com/public/assets/back-end/img/brand.png" alt="" /> Brand Update
                </h2>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body text-start">
                            <form action="https://6valley.6amtech.com/admin/brand/update/17" method="post" encType="multipart/form-data">
                                <input type="hidden" name="_token" value="PwtXfCOB4jJW4r7EFP7tbQ85VIeh6Q28sCgcjoVB" autoComplete="off" />
                                <ul className="nav nav-tabs w-fit-content mb-4">
                                    <li className="nav-item text-capitalize">
                                        <span className="nav-link form-system-language-tab cursor-pointer active" id="en-link"> English(EN) </span>
                                    </li>
                                    <li className="nav-item text-capitalize">
                                        <span className="nav-link form-system-language-tab cursor-pointer " id="sa-link"> Arabic(SA) </span>
                                    </li>
                                    <li className="nav-item text-capitalize">
                                        <span className="nav-link form-system-language-tab cursor-pointer " id="bd-link"> Bangla(BD) </span>
                                    </li>
                                    <li className="nav-item text-capitalize">
                                        <span className="nav-link form-system-language-tab cursor-pointer " id="in-link"> Hindi(IN) </span>
                                    </li>
                                </ul>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group form-system-language-form" id="en-form">
                                            <label className="title-color" htmlFor="name">Brand Name (EN)</label>
                                            <input type="text" name="name[]" defaultValue="Digital Product" className="form-control" id="name" placeholder="Ex : LUX" required />
                                        </div>
                                        <input type="hidden" name="lang[]" value="en" />
                                        <div className="form-group d-none form-system-language-form" id="sa-form">
                                            <label className="title-color" htmlFor="name">Brand Name (SA)</label>
                                            <input type="text" name="name[]" defaultValue="منتج رقمي" className="form-control" id="name" placeholder="Ex : LUX" />
                                        </div>
                                        <input type="hidden" name="lang[]" value="sa" />
                                        <div className="form-group d-none form-system-language-form" id="bd-form">
                                            <label className="title-color" htmlFor="name">Brand Name (BD)</label>
                                            <input type="text" name="name[]" defaultValue="ডিজিটাল পণ্য" className="form-control" id="name" placeholder="Ex : LUX" />
                                        </div>
                                        <input type="hidden" name="lang[]" value="bd" />
                                        <div className="form-group d-none form-system-language-form" id="in-form">
                                            <label className="title-color" htmlFor="name">Brand Name (IN)</label>
                                            <input type="text" name="name[]" defaultValue="डिजिटल उत्पाद" className="form-control" id="name" placeholder="Ex : LUX" />
                                        </div>
                                        <input type="hidden" name="lang[]" value="in" />
                                        <div className="form-group">
                                            <label className="title-color" htmlFor="brand"> Brand Logo </label>
                                            <span className="ml-2 text-info"> Ratio 1:1 (500 x 500 px) </span>
                                            <div className="custom-file text-left">
                                                <input type="file" name="image" id="brand-image" className="custom-file-input image-preview-before-upload" data-preview="#viewer" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" />
                                                <label className="custom-file-label" htmlFor="brand-image"> Choose file </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="text-center">
                                            <img className="upload-img-view" id="viewer" src="https://6valley.6amtech.com/storage/app/public/brand/2023-06-13-64882e182ba2c.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end gap-3">
                                    <button type="reset" id="reset" className="btn btn-secondary px-4">Reset</button>
                                    <button type="submit" className="btn btn-secondary px-4">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandUpdate;
