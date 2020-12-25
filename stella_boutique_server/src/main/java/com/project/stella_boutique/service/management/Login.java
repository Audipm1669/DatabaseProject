package com.project.stella_boutique.service.management;

@Service
public class Login {
    private MysqlDriver mysqlDriver = new MysqlDriver();

    public User findByEmail(String userEmail, String password) {
        try(Connection connection = this.mysqlDriver.getConnection()) {
            try (PreparedStatement stmt = connection.prepareStatement(
                    "SELECT * FROM `user` WHERE `email` = ? and `password` = ?")) {
                    stmt.setString(1, userEmail);
                    stmt.setString(2, password);

                    try (ResultSet rs = stmt.executeQuery()) {
                        while(rs.next()) {
                            int id = result.getInt();
                            String password = result.getString();
                            String fullName = result.getString();
                            String birthday = result.getString();
                            String address = result.getString();
                            String phoneNumber = result.getString();
                            String email = result.getString(); 
                            
                            User user = new User(id, password, fullName, birthday, address, phoneNumber, email);
                        }
                    }
                }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    
}