CREATE TABLE branches(
    id_branch SERIAL,
    name_branch VARCHAR(40) NOT NULL,
    address_branch TEXT,
    copiesBlackWhite_branch INT DEFAULT 0 CHECK (copiesBlackWhite_branch >= 0),
    copiesColor_branch INT DEFAULT 0 CHECK (copiesColor_branch >= 0),
    printsBlackWhite_branch INT DEFAULT 0 CHECK (printsBlackWhite_branch >= 0),
    printsColor_branch INT DEFAULT 0 CHECK (printsColor_branch >= 0),
    cash_branch REAL DEFAULT 0 CHECK (cash_branch >= 0),
    PRIMARY KEY (id_branch)
);

CREATE TABLE products(
    id_product SERIAL,
    name_product VARCHAR(50) NOT NULL,
    details_product TEXT,
    basePrice_product REAL DEFAULT 0 CHECK (basePrice_product >= 0),
    PRIMARY KEY (id_product)
);

CREATE TABLE articles(
    id_article SERIAL,
    name_article VARCHAR(50) NOT NULL,
    details_article VARCHAR(255),
    category_article VARCHAR(30),
    PRIMARY KEY (id_article)
);

CREATE TABLE users(
    id_user SERIAl,
    name_user VARCHAR(50),
    lastName_user VARCHAR(50),
    nickname_user VARCHAR(30) NOT NULL UNIQUE,
    mail_user VARCHAR(50),
    phone_user VARCHAR(20),
    password_user VARCHAR(50) NOT NULL,
    admin_user BOOLEAN DEFAULT TRUE,
    root_user BOOLEAN DEFAULT FALSE,
    active_user BOOLEAN DEFAULT TRUE,
    registrationDate DATE,
    id_branch INT,
    PRIMARY KEY (id_user),
    FOREIGN KEY (id_branch) REFERENCES branches(id_branch) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE branch_products(
    id_branch INT NOT NULL,
    id_product INT NOT NULL,
    price_branch_product REAL CHECK(price_branch_product >= 0),
    stock_branch_product INT DEFAULT 0,
    FOREIGN KEY (id_branch) REFERENCES branches(id_branch) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_product) REFERENCES products(id_product) ON UPDATE CASCADE
);

CREATE TABLE branch_articles(
    id_branch INT NOT NULL,
    id_article INT NOT NULL,
    stock_branch_article INT DEFAULT 0,
    exists_branch_article BOOLEAN DEFAULT FALSE,
    scarce_branch_article BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_branch) REFERENCES branches(id_branch) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_article) REFERENCES articles(id_article) ON UPDATE CASCADE
);

CREATE TABLE controls_users(
    id_control_users SERIAL,
    
    checkInDate_control_users DATE NOT NULL,
    checkOutDate_control_users DATE NOT NULL,
    checkInTime_control_users TIME NOT NULL,
    checkOutTime_control_users TIME NOT NULL,
    
    copiesBlackWhite_control_users INT DEFAULT 0 CHECK (copiesBlackWhite_control_users >= 0),
    copiesColor_control_users INT DEFAULT 0 CHECK (copiesColor_control_users >= 0),
    printsBlackWhite_control_users INT DEFAULT 0 CHECK (printsBlackWhite_control_users >= 0),
    printsColor_control_users INT DEFAULT 0 CHECK (printsColor_control_users >= 0),
    initialCash_control_users REAL DEFAULT 0 CHECK (initialCash_control_users >= 0),
    
    pennies50_control_users INT DEFAULT 0 CHECK (pennies50_control_users >= 0),
    coins1_control_users INT DEFAULT 0 CHECK (coins1_control_users >= 0),
    coins2_control_users INT DEFAULT 0 CHECK (coins2_control_users >= 0),
    coins5_control_users INT DEFAULT 0 CHECK (coins5_control_users >= 0),
    coins10_control_users INT DEFAULT 0 CHECK (coins10_control_users >= 0),
    coins20_control_users INT DEFAULT 0 CHECK (coins20_control_users >= 0),
    
    bills20_control_users INT DEFAULT 0 CHECK (bills20_control_users >= 0),
    bills50_control_users INT DEFAULT 0 CHECK (bills50_control_users >= 0),
    bills100_control_users INT DEFAULT 0 CHECK (bills100_control_users >= 0),
    bills200_control_users INT DEFAULT 0 CHECK (bills200_control_users >= 0),
    bills500_control_users INT DEFAULT 0 CHECK (bills500_control_users >= 0),
    bills1000_control_users INT DEFAULT 0 CHECK (bills1000_control_users >= 0),
    
    id_responsibleUser_control_users INT NOT NULL,
    id_receiveUser_control_users INT,
    PRIMARY KEY (id_control_users),
    FOREIGN KEY (id_responsibleUser_control_users) REFERENCES users(id_user) ON UPDATE CASCADE
);

CREATE TABLE products_controls_users(
    id_control_users INT NOT NULL,
    id_product INT NOT NULL,
    stock_product_control_users INT DEFAULT 0 CHECK (stock_product_control_users >= 0),
    sale_product_control_users INT DEFAULT 0 CHECK (sale_product_control_users >= 0),
    FOREIGN KEY (id_control_users) REFERENCES controls_users(id_control_users),
    FOREIGN KEY (id_product) REFERENCES products(id_product)
);

CREATE TABLE articles_controls_users( 
    id_control_users INT NOT NULL,
    id_article INT NOT NULL,
    stock_article_control_users INT DEFAULT 0,
    exists_article_control_users BOOLEAN DEFAULT FALSE,
    scarce_article_control_users BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_control_users) REFERENCES controls_users(id_control_users),
    FOREIGN KEY (id_article) REFERENCES articles(id_article)
);

CREATE TABLE observations(
    id_observation SERIAL,
    id_control_users INT NOT NULL,
    details_observation TEXT NOT NULL,
    income_observation REAL DEFAULT 0 CHECK (income_observation >= 0),
    expenses_observation REAL DEFAULT 0 CHECK (expenses_observation >= 0),
    PRIMARY KEY (id_observation),
    FOREIGN KEY (id_control_users) REFERENCES controls_users(id_control_users) ON DELETE CASCADE ON UPDATE CASCADE
);
