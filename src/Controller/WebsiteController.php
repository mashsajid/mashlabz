<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WebsiteController extends AbstractController
{
    /**
     * @Route("/", name="app_index")
     */
    public function index() : Response
    {
        return $this->render("website/index.html.twig");
    }

    /**
     * @Route("/contact", name="app_contact")
     */
    public function contact() : Response
    {
        return $this->render("website/contact.html.twig");
    }

    /**
     * @Route("/search", name="app_search")
     */
    public function search() : Response
    {
        return $this->render("_part/_searchbar.html.twig");
    }

    /**
     * @Route("/cart", name="app_cart")
     */
    public function cart() : Response
    {
        $products = [
            1 => [
                'name' => 'Blue denim shirt',
                'image' => 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp',
                'color' => 'blue',
                'size' => 'M',
                'quantity' => 1,
                'price' => 17.99
            ],
            2 => [
                'name' => 'Red denim shirt',
                'image' => 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp',
                'color' => 'red',
                'size' => 'M',
                'quantity' => 4,
                'price' => 17.99
            ]
        ];
        $cartPrice = 0.00;
        $totalQuantity = 0;
        foreach ($products as $product)
        {
            $cartPrice += $product['price'] * $product['quantity'];
            $totalQuantity += $product['quantity'];
        }
        return $this->render("user/cart.html.twig", [
            'products' => $products,
            'cartPrice' => $cartPrice,
            'totalquantity' => $totalQuantity
        ]);
    }

    /**
     * @Route("checkout", name="app_checkout")
     */
    public function checkout() : Response
    {
        return $this->render('user/checkout.html.twig', []);
    }
}