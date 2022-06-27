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
}