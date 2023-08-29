import { NavBar, EmptyCart, Footer } from "../../components/index";

function CartPage() {
  return (
    <>
      <NavBar />

      <div className="container mx-[80px] mt-8 mb-8 ">
        <EmptyCart />
        <br />
        <h3 className=" text-[17px]  text-gray-800 mb-1	 font-[700] leading-2">
          Recently wishlisted
        </h3>
        <hr />
      </div>

      <Footer />
    </>
  );
}

export default CartPage;
