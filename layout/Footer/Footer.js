import React from 'react';
import { FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div>
      <footer class="bg-dark  text-white">
        <div class="container p-4">
          {/* <section class=""> */}
            <div class="row">

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">About</h5>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                  repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                  eum harum corrupti dicta, aliquam sequi voluptate quas.
                </p>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>
                <hr />
                <ul class="list-unstyled mb-0">
                  <li class="mb-4">
                    <a href="#!" class="text-white ">About us</a>
                  </li>
                  <li class="mb-4">
                    <a href="#!" class="text-white ">Awards</a>
                  </li>
                  <li class="mb-4"> 
                    <a href="#!" class="text-white ">Services</a>
                  </li>
                  <li class="mb-4">
                    <a href="#!" class="text-white">News</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

                <h5 class="text-uppercase">Contact</h5>
                <hr />
                <ul class="list-unstyled mb-0">
                  <li class="mb-4">
                    <p class="text-white"><FiMapPin/> Address</p>
                  </li >
                  <li class="mb-4">
                    <p class="text-white"><FiMail/> Email</p>
                  </li>
                  <li class="mb-4">
                    <p class="text-white"><FiPhone/> Phone number</p>
                  </li>
                  <li class="mb-4">
                    <p class="text-white"><FiClock/> Working hours</p>
                  </li>
                </ul>

              </div>


              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Make an appoinment</h5>
                <hr />
                <form action="">

                  <div class="form-group mb-4" >
                    <input type="email" class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter email" />
                  </div>

                  <div class="form-group mb-4">
                    <input type="password" class="form-control" id="" placeholder="Password" />
                  </div>

                  <div class="form-group mb-4">
                    <input type="text" class="form-control" id="" placeholder="Message" />
                  </div>

                  <button type="submit" class="btn btn-outline-light mb-4">
                    Subscribe
                  </button>

                </form>

              </div>

            </div>
          {/* </section> */}
        </div>
      </footer>
    </div>
  )
}

export default Footer