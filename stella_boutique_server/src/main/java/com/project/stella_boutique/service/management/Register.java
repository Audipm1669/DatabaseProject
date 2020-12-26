package com.project.stella_boutique.service.management;

@Service
public class Register {
    @Autowired
    private MysqlDriver mysqlDriver = new MysqlDriver();

    @override
    private void registerUser(String username, String password, String fullname, String birthday, String address, String phoneNumber, String email) {
        Connection connection = null;

        try(Connection connection = this.mysqlDriver.getConnection()) {
            try (PreparedStatement stmt = connection.prepareStatement(
                    "INSERT INTO `user`" +
                    "(`id`, `password`, `fullname`, `username`, `birthday`, `address`, `phoneNumber`, `email`)" +
                    "VALUES(?, ?, ?, ?, ?, ?, ?, ?)"
                )) {
                    stmt.setString(1, "NULL");
                    stmt.setString(2, password);
                    stmt.setString(3, fullName);
                    stmt.setString(4, username);
                    stmt.setString(5, birthday);
                    stmt.setString(6, address);
                    stmt.setString(7, phoneNumber);
                    stmt.setString(8, email);

                    stmt.executeUpdate();
                }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            this.mysqlDriverAdapter.closeConnection(connection);
        }
    }   
}