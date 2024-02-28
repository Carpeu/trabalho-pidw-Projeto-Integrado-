
<?php
include 'config.php';

$clienteNome = $_POST['clienteNome'];

$sql = "INSERT INTO clientes (nome) VALUES ('$clienteNome')";

if ($conn->query($sql) === TRUE) {
    echo "Cliente cadastrado com sucesso!";
} else {
    echo "Erro ao cadastrar cliente: " . $conn->error;
}

$conn->close();
?>
