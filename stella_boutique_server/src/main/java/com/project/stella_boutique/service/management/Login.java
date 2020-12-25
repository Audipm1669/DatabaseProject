package com.project.stella_boutique.service.management;

@Service
public class Login {
    @Autowired
    private MysqlDriver mysqlDriver = new MysqlDriver();

    @override
    public User findByEmail(String username, String password) {
        Connection connection = null;
        User user = null;

        try(Connection connection = this.mysqlDriver.getConnection()) {
            try (PreparedStatement stmt = connection.prepareStatement(
                    "SELECT * FROM `user` WHERE `username` = ? and `password` = ?")) {
                    stmt.setString(1, username);
                    stmt.setString(2, password);

                    try (ResultSet rs = stmt.executeQuery()) {
                        while(rs.next()) {
                            int id = rs.getInt("id");
                            String password = rs.getString("password");
                            String fullName = rs.getString("fullname");
                            String username = rs.getString("username");
                            String birthday = rs.getString("birthday");
                            String address = rs.getString("address");
                            String phoneNumber = rs.getString("phoneNumber");
                            String email = result.getString("email"); 
                            
                            user = new User(id, password, fullName, birthday, address, phoneNumber, email);
                        }
                    }
                }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            this.mysqlDriverAdapter.closeConnection(connection);
        }
        return user;
    }   
}