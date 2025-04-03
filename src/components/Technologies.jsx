import {Button, IconTransButton} from "./Button.jsx";
import {
    BootstrapPlain, Css3Plain,
    FlaskOriginal, GitPlain, Html5Plain,
    JavaPlain,
    JavascriptPlain, MongodbPlain,
    MysqlOriginal,
    MysqlPlainWordmark,
    PhpPlain,
    PostgresqlPlain,
    PythonPlain, SqlitePlain
} from "devicons-react";
import RotatingText from "./text-effect/RotatingText.jsx";
import Squares from "./effect/BackgroundEffect.jsx";

export const Technologies = () => {
    return (
        <div className="border-b border-neutral-900 pb-24">
            <h1 className="my-20 text-center text-4xl">Tech Stack</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <IconTransButton
                    idle={<PythonPlain color="var(--primary-color)" size="30px" />}
                    hover={<PythonPlain color="var(--foreground-color)" size="30px" />}
                    tooltipId="python-plain"
                    tooltip={<b>Python</b>}
                />

                <IconTransButton
                    idle={<JavaPlain color="var(--primary-color)" size="30px" />}
                    hover={<JavaPlain color="var(--foreground-color)" size="30px" />}
                    tooltipId="java-plain"
                    tooltip={<b>Java</b>}
                />

                <IconTransButton
                    idle={<PhpPlain color="var(--primary-color)" size="30px" />}
                    hover={<PhpPlain color="var(--foreground-color)" size="30px" />}
                    tooltipId="php-plain"
                    tooltip={<b>PHP</b>}
                />

                <IconTransButton
                    idle={<JavascriptPlain color="var(--primary-color)" size="30px" />}
                    hover={<JavascriptPlain color="var(--foreground-color)" size="30px" />}
                    tooltipId="javascript-plain"
                    tooltip={<b>JavaScript</b>}
                />

                <IconTransButton
                    idle={<Html5Plain color="var(--primary-color)" size="30px" />}
                    hover={<Html5Plain color="var(--foreground-color)" size="30px" />}
                    tooltipId="html-plain"
                    tooltip={<b>HTML</b>}
                />

                <IconTransButton
                    idle={<Css3Plain color="var(--primary-color)" size="30px" />}
                    hover={<Css3Plain color="var(--foreground-color)" size="30px" />}
                    tooltipId="css-plain"
                    tooltip={<b>CSS</b>}
                />

                <IconTransButton
                    idle={<BootstrapPlain color="var(--primary-color)" size="30px" />}
                    hover={<BootstrapPlain color="var(--foreground-color)" size="30px" />}
                    tooltipId="bootstrap-plain"
                    tooltip={<b>Bootstrap</b>}
                />

                <IconTransButton
                    idle={<PostgresqlPlain color="var(--primary-color)" size="30px" />}
                    hover={<PostgresqlPlain color="var(--foreground-color)" size="30px" />}
                    tooltipId="postgresql-plain"
                    tooltip={<b>Postgresql</b>}
                />

                <IconTransButton
                    idle={<MysqlPlainWordmark color="var(--primary-color)" size="30px" />}
                    hover={<MysqlPlainWordmark color="var(--foreground-color)" size="30px" />}
                    tooltipId="mysql-plain"
                    tooltip={<b>MySql</b>}
                />

                <IconTransButton
                    idle={<MongodbPlain color="var(--primary-color)" size="30px" />}
                    hover={<MongodbPlain color="var(--foreground-color)" size="30px" />}
                    tooltipId="mongodb-plain"
                    tooltip={<b>MongoDB</b>}
                />

                <IconTransButton
                    idle={<SqlitePlain color="var(--primary-color)" size="30px" />}
                    hover={<SqlitePlain color="var(--foreground-color)" size="30px" />}
                    tooltipId="sqlite-plain"
                    tooltip={<b>SqLite</b>}
                />

                <IconTransButton
                    idle={<GitPlain color="var(--primary-color)" size="30px" />}
                    hover={<GitPlain color="var(--foreground-color)" size="30px" />}
                    tooltipId="git-plain"
                    tooltip={<b>Git</b>}
                />
            </div>
        </div>
    )
}