<?php
    $dbHost = 'mysql-fecapfinance-fecapfinance.h.aivencloud.com';
    $dbUsername = 'avnadmin';
    $dbPassword = 'AVNS_0W380zLSMtbj57SKo-5';
    $dbName = 'defaultdb';

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    if ($conexao->connect_errno) 
    {
        echo "Erro"
    }
    else{
        echo "Conectado";
    }


?>