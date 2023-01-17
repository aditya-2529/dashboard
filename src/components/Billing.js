import React from "react";
import '../App.css';

export const Billing = () => {
    return(
        <>
        <div class="container">
        <div class="py-5 text-center">
          <h2>Billing</h2>
        </div>
        <div class="row">
        
          <div class="col-md-8 order-md-1">
      
              <h4 class="mb-3">Payment</h4>
      
              <div class="d-block my-3">
                <div class="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required=""/>
                  <label class="custom-control-label" for="credit">Credit card</label>
                </div>
                <div class="custom-control custom-radio">
                  <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                  <label class="custom-control-label" for="debit">Debit card</label>
                </div>
                <div class="custom-control custom-radio">
                  <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                  <label class="custom-control-label" for="paypal">PayPal</label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Name of Bank</label>
                  <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Beneficiary Name</label>
                  <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Account number</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Bank Routing number</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Swift Code</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Bank Iban Number</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Bank Address</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">IFSC Code</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
                </div>
              </div>
              <hr class="mb-4"/>
              <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to Billing</button>
            
          </div>
        </div>
      </div>
        </>
    );
}