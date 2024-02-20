import React, { useState } from "react";
import richdad from "../../images/richdad.jpg";
import richdad2 from "../../images/richdad2.jpg";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GoGitCompare } from "react-icons/go";

const Featured = () => {
  const [tab, setTab] = useState("A");
  return (
    <section className="featured">
      <p className="featured-title">Mauris blandit aliquet</p>
      <h5 className="releases">Featured Releases</h5>
      <p className="featured-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis qui
        veniam vero!
      </p>

      <div className="menu">
        <p
          className={tab === "A" ? "active normal" : "normal"}
          onClick={() => setTab("A")}
        >
          BIOGRAPHY
        </p>
        <p
          className={tab === "B" ? "active normal" : "normal"}
          onClick={() => setTab("B")}
        >
          FANTASY
        </p>
        <p
          className={tab === "C" ? "active normal" : "normal"}
          onClick={() => setTab("C")}
        >
          HISTORY
        </p>
      </div>

      {tab === "A" ? (
        <div className="test">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                  <div className="product-image">
                    <Link href="#" class="image">
                      <img className="pic-1" src={richdad} alt="" />
                      <img className="pic-2" src={richdad2} alt="" />
                    </Link>
                    <span className="product-discount-label">-33%</span>
                    <ul className="product-links">
                      <li>
                        <Link to="">
                          <FaRegHeart />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <CiSearch />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <GoGitCompare />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <Link href="#">
                        ADD TO CART <FiShoppingCart />{" "}
                      </Link>
                    </h3>
                  </div>
                </div>
                <p className="book-title">
                  Rich Dad Poor Dad by Robert Klemmer
                </p>
                <p className="book-category">Finance</p>
                <div class="price"> $59.99</div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                  <div className="product-image">
                    <Link href="#" class="image">
                      <img className="pic-1" src={richdad} alt="" />
                      <img className="pic-2" src={richdad2} alt="" />
                    </Link>
                    <span className="product-discount-label">-33%</span>
                    <ul className="product-links">
                      <li>
                        <Link to="">
                          <FaRegHeart />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <CiSearch />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <GoGitCompare />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <Link href="#">
                        ADD TO CART <FiShoppingCart />{" "}
                      </Link>
                    </h3>
                  </div>
                </div>
                <p className="book-title">
                  Rich Dad Poor Dad by Robert Klemmer
                </p>
                <p className="book-category">Finance</p>
                <div class="price"> $59.99</div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                  <div className="product-image">
                    <Link href="#" class="image">
                      <img className="pic-1" src={richdad} alt="" />
                      <img className="pic-2" src={richdad2} alt="" />
                    </Link>
                    <span className="product-discount-label">-33%</span>
                    <ul className="product-links">
                      <li>
                        <Link to="">
                          <FaRegHeart />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <CiSearch />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <GoGitCompare />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <Link href="#">
                        ADD TO CART <FiShoppingCart />{" "}
                      </Link>
                    </h3>
                  </div>
                </div>
                <p className="book-title">
                  Rich Dad Poor Dad by Robert Klemmer
                </p>
                <p className="book-category">Finance</p>
                <div class="price"> $59.99</div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="product-grid">
                  <div className="product-image">
                    <Link href="#" class="image">
                      <img className="pic-1" src={richdad} alt="" />
                      <img className="pic-2" src={richdad2} alt="" />
                    </Link>
                    <span className="product-discount-label">-33%</span>
                    <ul className="product-links">
                      <li>
                        <Link to="">
                          <FaRegHeart />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <CiSearch />
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <GoGitCompare />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="title">
                      <Link href="#">
                        ADD TO CART <FiShoppingCart />{" "}
                      </Link>
                    </h3>
                  </div>
                </div>
                <p className="book-title">
                  Rich Dad Poor Dad by Robert Klemmer
                </p>
                <p className="book-category">Finance</p>
                <div class="price"> $59.99</div>
              </div>
            </div>
          </div>
        </div>
      ) : tab === "B" ? (
         <div className="test">
         <div className="container">
           <div className="row">
             <div className="col-md-3 col-sm-6">
               <div className="product-grid">
                 <div className="product-image">
                   <Link href="#" class="image">
                     <img className="pic-1" src={richdad} alt="" />
                     <img className="pic-2" src={richdad2} alt="" />
                   </Link>
                   <span className="product-discount-label">-33%</span>
                   <ul className="product-links">
                     <li>
                       <Link to="">
                         <FaRegHeart />
                       </Link>
                     </li>
                     <li>
                       <Link to="">
                         <CiSearch />
                       </Link>
                     </li>
                     <li>
                       <Link to="">
                         <GoGitCompare />
                       </Link>
                     </li>
                   </ul>
                 </div>
                 <div className="product-content">
                   <h3 className="title">
                     <Link href="#">
                       ADD TO CART <FiShoppingCart />{" "}
                     </Link>
                   </h3>
                 </div>
               </div>
               <p className="book-title">
                 Rich Dad Poor Dad by Robert Klemmer
               </p>
               <p className="book-category">Finance</p>
               <div class="price"> $59.99</div>
             </div>
             <div className="col-md-3 col-sm-6">
               <div className="product-grid">
                 <div className="product-image">
                   <Link href="#" class="image">
                     <img className="pic-1" src={richdad} alt="" />
                     <img className="pic-2" src={richdad2} alt="" />
                   </Link>
                   <span className="product-discount-label">-33%</span>
                   <ul className="product-links">
                     <li>
                       <Link to="">
                         <FaRegHeart />
                       </Link>
                     </li>
                     <li>
                       <Link to="">
                         <CiSearch />
                       </Link>
                     </li>
                     <li>
                       <Link to="">
                         <GoGitCompare />
                       </Link>
                     </li>
                   </ul>
                 </div>
                 <div className="product-content">
                   <h3 className="title">
                     <Link href="#">
                       ADD TO CART <FiShoppingCart />{" "}
                     </Link>
                   </h3>
                 </div>
               </div>
               <p className="book-title">
                 Rich Dad Poor Dad by Robert Klemmer
               </p>
               <p className="book-category">Finance</p>
               <div class="price"> $59.99</div>
             </div>
             <div className="col-md-3 col-sm-6">
               <div className="product-grid">
                 <div className="product-image">
                   <Link href="#" class="image">
                     <img className="pic-1" src={richdad} alt="" />
                     <img className="pic-2" src={richdad2} alt="" />
                   </Link>
                   <span className="product-discount-label">-33%</span>
                   <ul className="product-links">
                     <li>
                       <Link to="">
                         <FaRegHeart />
                       </Link>
                     </li>
                     <li>
                       <Link to="">
                         <CiSearch />
                       </Link>
                     </li>
                     <li>
                       <Link to="">
                         <GoGitCompare />
                       </Link>
                     </li>
                   </ul>
                 </div>
                 <div className="product-content">
                   <h3 className="title">
                     <Link href="#">
                       ADD TO CART <FiShoppingCart />{" "}
                     </Link>
                   </h3>
                 </div>
               </div>
               <p className="book-title">
                 Rich Dad Poor Dad by Robert Klemmer
               </p>
               <p className="book-category">Finance</p>
               <div class="price"> $59.99</div>
             </div>
             <div className="col-md-3 col-sm-6">
               <div className="product-grid">
                 <div className="product-image">
                   <Link href="#" class="image">
                     <img className="pic-1" src={richdad} alt="" />
                     <img className="pic-2" src={richdad2} alt="" />
                   </Link>
                   <span className="product-discount-label">-33%</span>
                   <ul className="product-links">
                     <li>
                       <Link to="">
                         <FaRegHeart />
                       </Link>
                     </li>
                     <li>
                       <Link to="">
                         <CiSearch />
                       </Link>
                     </li>
                     <li>
                       <Link to="">
                         <GoGitCompare />
                       </Link>
                     </li>
                   </ul>
                 </div>
                 <div className="product-content">
                   <h3 className="title">
                     <Link href="#">
                       ADD TO CART <FiShoppingCart />{" "}
                     </Link>
                   </h3>
                 </div>
               </div>
               <p className="book-title">
                 Rich Dad Poor Dad by Robert Klemmer
               </p>
               <p className="book-category">Finance</p>
               <div class="price"> $59.99</div>
             </div>
           </div>
         </div>
       </div>
      ) : (
         <div className="test">
         <div className="container">
           <div className="row">
             <div className="col-md-3 col-sm-6">
               <div className="product-grid">
                 <div className="product-image">
                   <Link href="#" class="image">
                     <img className="pic-1" src={richdad} alt="" />
                     <img className="pic-2" src={richdad2} alt="" />
                   </Link>
                   <span className="product-discount-label">-33%</span>
                   <ul className="product-links">
                     <li>
                       <Link to="">
                         <FaRegHeart />
                       </Link>
                     </li>
                     <li>
                       <Link to="">
                         <CiSearch />
                       </Link>
                     </li>
                     <li>
                       <Link to="">
                         <GoGitCompare />
                       </Link>
                     </li>
                   </ul>
                 </div>
                 <div className="product-content">
                   <h3 className="title">
                     <Link href="#">
                       ADD TO CART <FiShoppingCart />{" "}
                     </Link>
                   </h3>
                 </div>
               </div>
               <p className="book-title">
                 Rich Dad Poor Dad by Robert Klemmer
               </p>
               <p className="book-category">Finance</p>
               <div class="price"> $59.99</div>
             </div>
             <div className="col-md-3 col-sm-6">
               <div className="product-grid">
                 <div className="product-image">
                   <Link href="#" class="image">
                     <img className="pic-1" src={richdad} alt="" />
                     <img className="pic-2" src={richdad2} alt="" />
                   </Link>
                   <span className="product-discount-label">-33%</span>
                   <ul className="product-links">
                     <li>
                       <Link to="">
                         <FaRegHeart />
                       </Link>
                     </li>
                     <li>
                       <Link to="">
                         <CiSearch />
                       </Link>
                     </li>
                     <li>
                       <Link to="">
                         <GoGitCompare />
                       </Link>
                     </li>
                   </ul>
                 </div>
                 <div className="product-content">
                   <h3 className="title">
                     <Link href="#">
                       ADD TO CART <FiShoppingCart />{" "}
                     </Link>
                   </h3>
                 </div>
               </div>
               <p className="book-title">
                 Rich Dad Poor Dad by Robert Klemmer
               </p>
               <p className="book-category">Finance</p>
               <div class="price"> $59.99</div>
             </div>
             <div className="col-md-3 col-sm-6">
               <div className="product-grid">
                 <div className="product-image">
                   <Link href="#" class="image">
                     <img className="pic-1" src={richdad} alt="" />
                     <img className="pic-2" src={richdad2} alt="" />
                   </Link>
                   <span className="product-discount-label">-33%</span>
                   <ul className="product-links">
                     <li>
                       <Link to="">
                         <FaRegHeart />
                       </Link>
                     </li>
                     <li>
                       <Link to="">
                         <CiSearch />
                       </Link>
                     </li>
                     <li>
                       <Link to="">
                         <GoGitCompare />
                       </Link>
                     </li>
                   </ul>
                 </div>
                 <div className="product-content">
                   <h3 className="title">
                     <Link href="#">
                       ADD TO CART <FiShoppingCart />{" "}
                     </Link>
                   </h3>
                 </div>
               </div>
               <p className="book-title">
                 Rich Dad Poor Dad by Robert Klemmer
               </p>
               <p className="book-category">Finance</p>
               <div class="price"> $59.99</div>
             </div>
             <div className="col-md-3 col-sm-6">
               <div className="product-grid">
                 <div className="product-image">
                   <Link href="#" class="image">
                     <img className="pic-1" src={richdad} alt="" />
                     <img className="pic-2" src={richdad2} alt="" />
                   </Link>
                   <span className="product-discount-label">-33%</span>
                   <ul className="product-links">
                     <li>
                       <Link to="">
                         <FaRegHeart />
                       </Link>
                     </li>
                     <li>
                       <Link to="">
                         <CiSearch />
                       </Link>
                     </li>
                     <li>
                       <Link to="">
                         <GoGitCompare />
                       </Link>
                     </li>
                   </ul>
                 </div>
                 <div className="product-content">
                   <h3 className="title">
                     <Link href="#">
                       ADD TO CART <FiShoppingCart />{" "}
                     </Link>
                   </h3>
                 </div>
               </div>
               <p className="book-title">
                 Rich Dad Poor Dad by Robert Klemmer
               </p>
               <p className="book-category">Finance</p>
               <div class="price"> $59.99</div>
             </div>
           </div>
         </div>
       </div>
      )}
    </section>
  );
};

export default Featured;
