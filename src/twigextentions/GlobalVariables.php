<?php

namespace App\twigextentions;

use Twig\Extension\AbstractExtension;
use Twig\Extension\GlobalsInterface;

class GlobalVariables extends AbstractExtension implements GlobalsInterface
{
    public function getGlobals(): array
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
        // TODO: Implement getGlobals() method.
        return [
            'products' => $products,
            'cartPrice' => $cartPrice,
            'totalquantity' => $totalQuantity
        ];
    }
}